import { DocumentBuilder, SwaggerCustomOptions } from "@nestjs/swagger";

export const swaggerPath = "api";

export const swaggerDocumentOptions = new DocumentBuilder()
  .setTitle("OrthoDrone")
  .setDescription(
    'The OrthoDrone service enables : \n\n1-Image collection and pre-processing :\n\nA-Read the raw images from the Micasense RedEdge multispectral camera.\nB-Calibrate images if necessary.\n\n2-Image alignment:\nA-Align the different spectral bands to create a multiband image.\n\n3-Assembly :\nA-Use image stitching techniques to create the mosaic.\n\n4-Georeferencing :\nA-Georeference the mosaic using GPS data.\n\n5- Orthophoto output :\nA-Save the output in a manageable format (e.g. GeoTIFF).\n\nThis is an application for creating multi-spectral orthophonic mosaics from raw photos taken by a drone.\n\n## Congratulations! Your service resource is ready.\n  \nPlease note that all endpoints are secured with JWT Bearer authentication.\nBy default, your service resource comes with one user with the username "admin" and password "admin".\nLearn more in [our docs](https://docs.amplication.com)'
  )
  .addBearerAuth()
  .build();

export const swaggerSetupOptions: SwaggerCustomOptions = {
  swaggerOptions: {
    persistAuthorization: true,
  },
  customCssUrl: "../swagger/swagger.css",
  customfavIcon: "../swagger/favicon.png",
  customSiteTitle: "OrthoDrone",
};
