import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';


@Entity()
@Unique(['shortLink'])
export class Shortlink {

  @Column()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable: false})
  originalLink: string;

  @Column({nullable: false})
  shortLink: string;

}
