import { TimestampEntity } from 'lib/entities/timestamp.entity';
import { ERole } from 'lib/types/enums/role.enum';
import { Column, Entity } from 'typeorm';

@Entity('users')
export class UserEntity extends TimestampEntity {
  @Column({
    type: 'varchar',
    length: 50,
  })
  fullName: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  firstName: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  lastName: string;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 50,
  })
  password: string;

  @Column({
    type: 'enum',
    enum: ERole,
    default: 'user',
    length: 50,
  })
  role: string;

  @Column({
    type: 'boolean',
    default: true,
  })
  isActive: boolean;
}
