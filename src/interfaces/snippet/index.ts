import { EpisodeInterface } from 'interfaces/episode';
import { IndividualInterface } from 'interfaces/individual';
import { GetQueryInterface } from 'interfaces';

export interface SnippetInterface {
  id?: string;
  start_time: number;
  end_time: number;
  episode_id: string;
  individual_id: string;
  created_at?: any;
  updated_at?: any;

  episode?: EpisodeInterface;
  individual?: IndividualInterface;
  _count?: {};
}

export interface SnippetGetQueryInterface extends GetQueryInterface {
  id?: string;
  episode_id?: string;
  individual_id?: string;
}
