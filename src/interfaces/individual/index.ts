import { PlaylistInterface } from 'interfaces/playlist';
import { SnippetInterface } from 'interfaces/snippet';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface IndividualInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  playlist?: PlaylistInterface[];
  snippet?: SnippetInterface[];
  user?: UserInterface;
  _count?: {
    playlist?: number;
    snippet?: number;
  };
}

export interface IndividualGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
