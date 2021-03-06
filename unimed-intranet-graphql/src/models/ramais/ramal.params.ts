import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { PaginatedSearchParam } from "../general/paginated.model";
import { RespostaQueryArray } from "../resposta.entity";


@InputType()
export class RamalParams extends PaginatedSearchParam {
    
    @Field({ nullable: true})
    nm_Inicial_Selecionada: string 

    @Field({nullable: true})
    cd_Origem: number
}

