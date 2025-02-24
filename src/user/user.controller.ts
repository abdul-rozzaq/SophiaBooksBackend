import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
  Req,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { LoginDto } from './dto/loginDto';
import { AuthGuard } from 'src/common/auth/auth.guard';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Post('login')
  login(@Body() createUserDto: LoginDto) {
    return this.userService.login(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get('me')
  async getMe(@Req() req) {
    const userId = req.user.id;

    return this.userService.getMe(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  @UseInterceptors(
    FileInterceptor('profile_image', {
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const uniqueSuffix =
            Date.now() + '-' + Math.round(Math.random() * 1e9);
          const ext = extname(file.originalname);
          const fileName = `user-${uniqueSuffix}${ext}`;

          callback(null, fileName);
        },
      }),
      fileFilter: (req, file, callback) => {
        if (!file.mimetype.match(/\/(jpg|jpeg|png|gif)$/)) {
          return callback(new Error('Only image files are allowed!'), false);
        }
        callback(null, true);
      },
    }),
  )
  async update(
    @Param('id') id: number,
    @UploadedFile() file: Express.Multer.File,
    @Body() UpdateUserDto: UpdateUserDto,
    @Req() req,
  ) {
    try {
      const userId = req.user.id;

      if (userId != id) {
        return { message: 'You are not authorized to update this profile' };
      }

      const profile_picture = file
        ? '/uploads/' + file.filename
        : req.user.profile_image;

      const updatedData = { ...UpdateUserDto, profile_image: profile_picture };

      const updatedProfile = await this.userService.update(id, updatedData);

      return {
        message: 'Profile picture updated successfully',
        updatedProfile,
      };
    } catch (error) {
      return {
        message: 'Profile picture updated successfully',
        error: error.message,
      };
    }
  }
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
