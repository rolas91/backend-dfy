import { InputType, ObjectType } from "type-graphql";

import { UserDto } from "../users/user.dto";
import { KindTicketDto } from "../kind-ticket/kind-ticket.dto";
import { AppsDto } from "../apps/apps.dto";
import { TicketCategoryDto } from "../ticket-category/ticket-category.dto";
import { TicketPriorityDto } from "../ticket-priority/ticket-priority.dto";
import { TicketStatusDto } from "../ticket-status/ticket-status.dto";

@InputType()
export class SupportTicketInput {
    id: number;
    title: string;
    description: string;
    update_at: Date;
    created_at: Date;
    asigned_id: number;
    categoryID: number;
    kindID: number;
    userID: number;
    appID: number;
    priorityID: number;
    statusID: number;
}

@ObjectType()
export class SupportTicketDto {
    id: number;
    title: string;
    description: string;
    update_at: Date;
    created_at: Date;
    asigned_id: number;
    category: TicketCategoryDto;
    kind: KindTicketDto;
    user: UserDto;
    app: AppsDto;
    priority: TicketPriorityDto;
    status: TicketStatusDto;
}