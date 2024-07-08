import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { OrthoProcessorService } from "./orthoprocessor.service";

@swagger.ApiTags("orthoProcessors")
@common.Controller("orthoProcessors")
export class OrthoProcessorController {
  constructor(protected readonly service: OrthoProcessorService) {}
}
