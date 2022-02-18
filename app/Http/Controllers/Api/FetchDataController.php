<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Facades\FetchData;

class FetchDataController extends Controller
{
    public function fetch($serviceName, $id)
    {
        return FetchData::setService($serviceName)->fetch($id);
    }
}
