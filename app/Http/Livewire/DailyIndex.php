<?php

namespace App\Http\Livewire;

use Livewire\Component;

class DailyIndex extends Component
{
    public function render()
    {
        return view('livewire.daily-index')->layout('layouts.app');
    }
}
