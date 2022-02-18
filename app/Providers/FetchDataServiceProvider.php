<?php

namespace App\Providers;

use App\Services\FetchDataService;
use Illuminate\Support\ServiceProvider;

class FetchDataServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind('fetcher', function() {
            return new FetchDataService;
        });
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
