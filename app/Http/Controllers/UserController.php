<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class UserController extends Controller
{
    /**
     * ユーザー情報を取得
     *
     * @param int $id
     * @return JsonResponse
     */
    public function show($id): JsonResponse
    {
        // モックデータを用意
        $mockUserData = [
            1 => [
                'id' => 1,
                'name' => 'John Doe',
                'email' => 'johndoe@example.com',
                'age' => 30,
                'created_at' => '2023-05-01T00:00:00Z',
                'updated_at' => '2023-05-10T00:00:00Z',
            ],
            2 => [
                'id' => 2,
                'name' => 'Jane Doe',
                'email' => 'janedoe@example.com',
                'age' => 25,
                'created_at' => '2023-06-01T00:00:00Z',
                'updated_at' => '2023-06-10T00:00:00Z',
            ],
        ];

        // 指定されたIDのユーザーがモックデータにあるか確認
        if (! array_key_exists($id, $mockUserData)) {
            return response()->json([
                'message' => 'User not found'
            ], 404);
        }

        // モックデータをJSON形式で返す
        return response()->json($mockUserData[$id]);
    }
}
