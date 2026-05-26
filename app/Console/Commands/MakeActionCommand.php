<?php

namespace App\Console\Commands;

use Illuminate\Console\Attributes\Description;
use Illuminate\Console\Attributes\Signature;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;

#[Signature('make:action {name}')]
#[Description('Create CRUD actions')]
class MakeActionCommand extends Command
{
    /**
     * Execute the console command.
     */
    public function handle()
    {
        $name = $this->argument('name');

        $path = app_path("Actions/{$name}");

        if (! File::exists($path)) {
            File::makeDirectory($path, 0755, true);
        }

        $actions = [
            "Create{$name}Action",
            "Update{$name}Action",
            "Delete{$name}Action",
        ];

        foreach ($actions as $action) {
            $file = "{$path}/{$action}.php";

            if (File::exists($file)) {
                $this->warn("{$action} already exists.");
                continue;
            }

            File::put($file, $this->getStub($name, $action));

            $this->info("Created: {$action}");
        }
    }

    protected function getStub(string $name, string $action): string
    {
        return <<<PHP
    <?php

    namespace App\\Actions\\{$name};

    class {$action}
    {
        public function handle(array \$data)
        {
            //
        }
    }

    PHP;
        }

}
