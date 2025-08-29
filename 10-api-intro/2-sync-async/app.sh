#!/bin/bash

# echo "<pre>"

for id in {1..5}
do
  curl -s "https://fakestoreapi.com/products/$id"
  echo    # adds a newline after each product
done