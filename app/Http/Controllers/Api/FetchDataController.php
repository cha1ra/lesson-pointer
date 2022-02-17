<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class FetchDataController extends Controller
{
    public function fetch($serviceName, $id)
    {
        return 'fetch';
    }
}
