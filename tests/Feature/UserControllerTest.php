<?php

use Tests\TestCase;
use Spectator\Spectator;

class UserControllerTest extends TestCase
{
    /**
     * /api/sampleのGETメソッドのレスポンス200を検証するテスト
     */
    public function test_spec_get_sample_200()
    {
        Spectator::using('user_api.yaml');
        $id = 1;
        $response = $this->get("/api/users/{$id}");
        $response->assertValidRequest();
        $response->assertValidResponse(200);
        // 特定の値を検証
        $response->assertJsonFragment([
            'id' => $id,
        ]);
        // レスポンスのJSON構造を検証
        $response->assertJsonStructure([
            'id', 'name', 'email', 'age', 'created_at', 'updated_at'
        ]);
        // レスポンスの型を検証
        $this->assertIsInt($response['id']);
        $this->assertIsString($response['name']);
        $this->assertIsString($response['email']);
        $this->assertIsInt($response['age']);
        $this->assertIsString($response['created_at']);
        $this->assertIsString($response['updated_at']);
    }
}
