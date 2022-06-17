<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Api\ProductStoreRequest;
use App\Http\Requests\Api\ProductUpdateRequest;
use App\Http\Resources\Api\ProductResource;
use App\Models\Product;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Response;

class ProductController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return ProductResource::collection(Product::all());
    }

    public function store(ProductStoreRequest $request): ProductResource
    {
        return new ProductResource(
            Product::query()
                   ->create($request->validated())
        );
    }

    public function show(Product $product): ProductResource
    {
        return new ProductResource($product);
    }

    public function update(ProductUpdateRequest $request, Product $product): ProductResource
    {
        return new ProductResource(
            $product->update($request->validated())
        );
    }


    public function destroy(Product $product): Response
    {
        $product->delete();

        return response()->noContent();
    }
}
