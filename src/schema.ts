export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      facts: {
        Row: {
          id: number
          text: string | null
        }
        Insert: {
          id?: number
          text?: string | null
        }
        Update: {
          id?: number
          text?: string | null
        }
      }
      factsOfTheDay: {
        Row: {
          date: string
          fact: number | null
        }
        Insert: {
          date: string
          fact?: number | null
        }
        Update: {
          date?: string
          fact?: number | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
