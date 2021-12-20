import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import {v4 as uuid} from 'uuid'

@Entity("users")
class User {
  @PrimaryColumn()
  readonly id: string; //readonly somente para leitura a inserção sera feita pela entidade

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  admin: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

  constructor(){
      if(!this.id){
          this.id = uuid()
      }
  }
}

export { User };
