<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class FetchData extends Facade
{
    protected static function getFacadeAccessor()
    {
        return 'fetcher';
    }
}
