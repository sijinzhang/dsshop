<?php

return [

    /*
    |--------------------------------------------------------------------------
    | 客服配置
    | 以下根据企业微信的客服功能配置
    |--------------------------------------------------------------------------
    */
    'workWeixin' => [
        'url' => env('WORK_WEIXIN_URL', null),  // 客服链接
        'id' => env('WORK_WEIXIN_ID', null), // 企业ID
    ]
];
