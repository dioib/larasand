<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Interfaces\TaskRepositoryInterface;
use App\Repositories\TaskRepository;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register()
    {
        //　TaskRepositoryInterfaceクラスへの要求をTaskRepositoryクラスにバインド
        $this->app->bind(TaskRepositoryInterface::class, TaskRepository::class);
    }
}
