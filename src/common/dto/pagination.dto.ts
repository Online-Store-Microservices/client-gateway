import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsOptional, IsPositive } from "class-validator";

export class PaginationDto {
    @ApiProperty({
        description: 'Page number',
        minimum: 1,
        default: 1,
        example: 1,
        required: false
    })
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    page?: number = 1;

    @ApiProperty({
        description: 'Number of items per page',
        minimum: 1,
        default: 10,
        example: 10,
        required: false
    })
    @IsPositive()
    @IsOptional()
    @Type(() => Number)
    limit?: number = 10;

}