import { SnippetInterface } from 'interfaces/snippet';
import { PodcastInterface } from 'interfaces/podcast';
import { GetQueryInterface } from 'interfaces';

export interface EpisodeInterface {
  id?: string;
  title: string;
  podcast_id: string;
  duration: number;
  created_at?: any;
  updated_at?: any;
  snippet?: SnippetInterface[];
  podcast?: PodcastInterface;
  _count?: {
    snippet?: number;
  };
}

export interface EpisodeGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  podcast_id?: string;
}
