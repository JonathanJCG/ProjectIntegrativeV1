<?php

Route::get('/sensor', function() {
    return view('datos');
});

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function (){
    return view('spa');
})->where('any', '.*');


/*
Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
*/
