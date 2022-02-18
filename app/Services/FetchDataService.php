<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class FetchDataService {
    private $service;
    private $content;

    public function setService(string $service): self
    {
        $this->service = $service;
        return $this;
    }

    public function notion($data = null): self
    {
        $this->service = 'notion';
        $this->content = $data;
        return $this;
    }

    public function fetch(string $id)
    {
        switch ($this->service) {
            case 'notion':
                return Http::get('https://notion-page-to-html-api.vercel.app/html', [
                    'id' => $id,
                ]);
        }
    }

}
