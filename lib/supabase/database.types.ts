export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      aspect_perks: {
        Row: {
          aspect_id: string
          perk_id: string
        }
        Insert: {
          aspect_id: string
          perk_id: string
        }
        Update: {
          aspect_id?: string
          perk_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "aspect_perks_aspect_id_fkey"
            columns: ["aspect_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "aspect_perks_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      character_class: {
        Row: {
          character: number | null
          class: string | null
          id: number
          level: number
        }
        Insert: {
          character?: number | null
          class?: string | null
          id?: number
          level: number
        }
        Update: {
          character?: number | null
          class?: string | null
          id?: number
          level?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_class_character_fkey"
            columns: ["character"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_class_class_fkey"
            columns: ["class"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      character_perks: {
        Row: {
          acquired_at: string
          character_id: number
          id: string
          perk_id: string
        }
        Insert: {
          acquired_at?: string
          character_id: number
          id?: string
          perk_id: string
        }
        Update: {
          acquired_at?: string
          character_id?: number
          id?: string
          perk_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_perks_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_perks_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      characters: {
        Row: {
          backstory: string | null
          character_creator: string | null
          created_at: string
          id: number
          image: string | null
          level: number
          name: string
          personality: string | null
          race: string | null
        }
        Insert: {
          backstory?: string | null
          character_creator?: string | null
          created_at?: string
          id?: number
          image?: string | null
          level: number
          name: string
          personality?: string | null
          race?: string | null
        }
        Update: {
          backstory?: string | null
          character_creator?: string | null
          created_at?: string
          id?: number
          image?: string | null
          level?: number
          name?: string
          personality?: string | null
          race?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "characters_character_creator_fkey"
            columns: ["character_creator"]
            isOneToOne: false
            referencedRelation: "players"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "characters_race_fkey"
            columns: ["race"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      class_prerequisites: {
        Row: {
          class_required: string
          for_class: string
          id: number
        }
        Insert: {
          class_required: string
          for_class: string
          id?: number
        }
        Update: {
          class_required?: string
          for_class?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "class_prerequisites_class_required_fkey"
            columns: ["class_required"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_prerequisites_for_class_fkey"
            columns: ["for_class"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_prerequisities_class_required_fkey"
            columns: ["class_required"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_prerequisities_for_class_fkey"
            columns: ["for_class"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          class_rank: Database["public"]["Enums"]["class_rank"]
          id: string
          image: string | null
          name: string
        }
        Insert: {
          class_rank?: Database["public"]["Enums"]["class_rank"]
          id: string
          image?: string | null
          name: string
        }
        Update: {
          class_rank?: Database["public"]["Enums"]["class_rank"]
          id?: string
          image?: string | null
          name?: string
        }
        Relationships: []
      }
      perk_classes: {
        Row: {
          class_id: string
          perk_id: string
        }
        Insert: {
          class_id: string
          perk_id: string
        }
        Update: {
          class_id?: string
          perk_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "perk_classes_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "perk_classes_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      perk_prerequisites: {
        Row: {
          for_perk_id: string
          id: string
          req_class_id: string | null
          req_class_level: number | null
          req_perk_id: string | null
        }
        Insert: {
          for_perk_id: string
          id?: string
          req_class_id?: string | null
          req_class_level?: number | null
          req_perk_id?: string | null
        }
        Update: {
          for_perk_id?: string
          id?: string
          req_class_id?: string | null
          req_class_level?: number | null
          req_perk_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "perk_prerequisites_for_perk_id_fkey"
            columns: ["for_perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "perk_prerequisites_req_class_id_fkey"
            columns: ["req_class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "perk_prerequisites_req_perk_id_fkey"
            columns: ["req_perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      perks: {
        Row: {
          blurb: string | null
          cost_amount: number | null
          cost_resource: Database["public"]["Enums"]["resource_type"] | null
          cost_unit: string | null
          description: string | null
          icon: string | null
          id: string
          name: string
          perk_type: Database["public"]["Enums"]["perk_type"]
        }
        Insert: {
          blurb?: string | null
          cost_amount?: number | null
          cost_resource?: Database["public"]["Enums"]["resource_type"] | null
          cost_unit?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name: string
          perk_type: Database["public"]["Enums"]["perk_type"]
        }
        Update: {
          blurb?: string | null
          cost_amount?: number | null
          cost_resource?: Database["public"]["Enums"]["resource_type"] | null
          cost_unit?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          name?: string
          perk_type?: Database["public"]["Enums"]["perk_type"]
        }
        Relationships: []
      }
      players: {
        Row: {
          avatar: string | null
          display_name: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
        }
        Insert: {
          avatar?: string | null
          display_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Update: {
          avatar?: string | null
          display_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
        }
        Relationships: []
      }
      races: {
        Row: {
          blurb: string | null
          id: string
          image: string | null
          name: string | null
        }
        Insert: {
          blurb?: string | null
          id: string
          image?: string | null
          name?: string | null
        }
        Update: {
          blurb?: string | null
          id?: string
          image?: string | null
          name?: string | null
        }
        Relationships: []
      }
      racial_perk_details: {
        Row: {
          perk_id: string
          race_id: string
        }
        Insert: {
          perk_id: string
          race_id: string
        }
        Update: {
          perk_id?: string
          race_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "racial_perk_details_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: true
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "racial_perk_details_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      spell_details: {
        Row: {
          components: string | null
          damage: string | null
          damage_type: string | null
          duration: string | null
          perk_id: string
          range: string | null
          school: string
        }
        Insert: {
          components?: string | null
          damage?: string | null
          damage_type?: string | null
          duration?: string | null
          perk_id: string
          range?: string | null
          school: string
        }
        Update: {
          components?: string | null
          damage?: string | null
          damage_type?: string | null
          duration?: string | null
          perk_id?: string
          range?: string | null
          school?: string
        }
        Relationships: [
          {
            foreignKeyName: "spell_details_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: true
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "player"
      class_rank: "basic" | "advanced" | "mighty"
      magic_kind: "true" | "false" | "semi"
      perk_kind: "perk" | "spell" | "aspect"
      perk_type: "class_perk" | "racial_perk" | "spell" | "aspect"
      resource: "Body" | "Soul" | "Charisma" | "Coins" | "Material"
      resource_type: "body" | "soul" | "charisma" | "material"
      stat_kind: "attribute" | "resource" | "counter"
      stat_track: "severity_points" | "integer"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "player"],
      class_rank: ["basic", "advanced", "mighty"],
      magic_kind: ["true", "false", "semi"],
      perk_kind: ["perk", "spell", "aspect"],
      perk_type: ["class_perk", "racial_perk", "spell", "aspect"],
      resource: ["Body", "Soul", "Charisma", "Coins", "Material"],
      resource_type: ["body", "soul", "charisma", "material"],
      stat_kind: ["attribute", "resource", "counter"],
      stat_track: ["severity_points", "integer"],
    },
  },
} as const
