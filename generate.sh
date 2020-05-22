#!/bin/bash

mkdir -p "./src/generated"

yarn run grpc_tools_node_protoc --plugin="./node_modules/.bin/protoc-gen-ts_proto" \
  -I="./src" \
  --ts_proto_out="./src/generated" \
  --ts_proto_opt="nestJs=true" \
  --ts_proto_opt="addGrpcMetadata=true" \
  --ts_proto_opt="returnObservable=true" \
  ./src/hello_service.proto