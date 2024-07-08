import { Module } from "@nestjs/common";
import { OrthoProcessorService } from "./orthoprocessor.service";
import { OrthoProcessorController } from "./orthoprocessor.controller";
import { OrthoProcessorResolver } from "./orthoprocessor.resolver";

@Module({
  controllers: [OrthoProcessorController],
  providers: [OrthoProcessorService, OrthoProcessorResolver],
  exports: [OrthoProcessorService],
})
export class OrthoProcessorModule {}
