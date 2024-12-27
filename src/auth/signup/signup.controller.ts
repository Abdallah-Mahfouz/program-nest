import { Body, Controller, Param, Query, Post, Req, Res } from '@nestjs/common';

@Controller('signup')
export class SignupController {
  @Post('/:id')
  signup(@Req() req: any, @Res() res: any) {
    {
      return {
        message: 'success',
        body: req.body,
        Param: req.params,
        query: req.query,
      };
    }
  }
}
