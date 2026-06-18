// pages/menu-sidebar/post/partials/create-post-dialog.tsx
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from '@inertiajs/react';
import { PostPayload } from '@/types';
import { FormEventHandler } from 'react';
import posts from '@/routes/posts';
import { toast } from 'sonner';
import FormPost from './partials/form-post';

interface CreatePostDialogProps {
    open: boolean;
    onClose: () => void;
}

export function CreatePostDialog({ open, onClose }: CreatePostDialogProps) {
    const {
        data,
        setData,
        post,
        processing,
        errors,
        reset,
        isDirty,
        transform,
    } = useForm<PostPayload>({
        title: '',
        content: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(posts.store().url, {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success('Post berhasil ditambahkan');
                reset();
            },
            onError: () => {
                toast.error(
                    'Gagal menambahkan post. Pastikan semua data sudah benar dan coba lagi.',
                );
            },
        });
    };

    return (
        <Dialog
            open={open}
            onOpenChange={(isOpen) => {
                if (!isOpen) onClose();
            }}
        >
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle>Buat Post</DialogTitle>
                    <DialogDescription>
                        Lengkapi semua data dibawah ini.
                    </DialogDescription>
                </DialogHeader>
                <form id="create-post" onSubmit={submit}>
                    <FormPost
                        data={data}
                        setData={setData}
                        errors={errors}
                        processing={processing}
                    />
                </form>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline" onClick={onClose}>
                            Cancel
                        </Button>
                    </DialogClose>
                    <Button
                        type="submit"
                        form="create-post"
                        disabled={processing}
                    >
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
