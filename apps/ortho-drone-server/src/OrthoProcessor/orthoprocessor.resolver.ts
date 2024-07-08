import * as graphql from "@nestjs/graphql";
import { OrthoProcessorService } from "./orthoprocessor.service";

export class OrthoProcessorResolver {
  constructor(protected readonly service: OrthoProcessorService) {}
}
