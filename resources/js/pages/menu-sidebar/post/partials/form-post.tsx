import { FieldGroup, Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AppLayout from '@/layouts/app-layout';
import { BreadcrumbItem, PostPayload } from '@/types';
import { Head, InertiaFormProps } from '@inertiajs/react';

interface FormAlatProps {
    data: PostPayload;
    setData: InertiaFormProps<PostPayload>['setData'];
    errors: InertiaFormProps<PostPayload>['errors'];
    processing: boolean;
    existingImage?: string;
}

export default function FormPost({
    data,
    setData,
    errors,
    processing,
    existingImage,
}: FormAlatProps) {
    return (
        <>
            <FieldGroup>
                <Field>
                    <Label htmlFor="title">Judul</Label>
                    <Input
                        id="title"
                        name="title"
                        onChange={(e) => setData('title', e.target.value)}
                        value={data.title}
                    />
                </Field>
                <Field>
                    <Label htmlFor="content">Isi</Label>
                    <Textarea
                        id="content"
                        name="content"
                        onChange={(e) => setData('content', e.target.value)}
                        value={data.content}
                    />
                </Field>
            </FieldGroup>
        </>
    );
}
