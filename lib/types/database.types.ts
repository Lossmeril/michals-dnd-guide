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
    PostgrestVersion: "14.17"
  }
  public: {
    Tables: {
      backgrounds: {
        Row: {
          coins_copper: number
          description: string | null
          equipment: Json
          extra_languages: number
          id: string
          known_settings: string | null
          material: number
          name: string
          sort: number
        }
        Insert: {
          coins_copper?: number
          description?: string | null
          equipment?: Json
          extra_languages?: number
          id: string
          known_settings?: string | null
          material?: number
          name: string
          sort?: number
        }
        Update: {
          coins_copper?: number
          description?: string | null
          equipment?: Json
          extra_languages?: number
          id?: string
          known_settings?: string | null
          material?: number
          name?: string
          sort?: number
        }
        Relationships: []
      }
      campaign_players: {
        Row: {
          campaign_id: number
          character_id: number
          id: number
        }
        Insert: {
          campaign_id: number
          character_id: number
          id?: number
        }
        Update: {
          campaign_id?: number
          character_id?: number
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "campaign_players_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_players_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_updates: {
        Row: {
          author: string
          body: string
          campaign_id: number
          created_at: string
          id: number
        }
        Insert: {
          author?: string
          body: string
          campaign_id: number
          created_at?: string
          id?: number
        }
        Update: {
          author?: string
          body?: string
          campaign_id?: number
          created_at?: string
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "campaign_updates_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_updates_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaigns: {
        Row: {
          description: string | null
          dm: string | null
          id: number
          image_url: string | null
          name: string | null
        }
        Insert: {
          description?: string | null
          dm?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Update: {
          description?: string | null
          dm?: string | null
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaigns_dm_fkey"
            columns: ["dm"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      character_classes: {
        Row: {
          character_id: number
          class_id: string
          level: number
        }
        Insert: {
          character_id: number
          class_id: string
          level: number
        }
        Update: {
          character_id?: number
          class_id?: string
          level?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_classes_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_classes_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      character_items: {
        Row: {
          broken: boolean
          carried: boolean
          character_id: number
          created_at: string
          from_background: boolean
          id: number
          item_id: string | null
          name: string | null
          note: string | null
          quantity: number
        }
        Insert: {
          broken?: boolean
          carried?: boolean
          character_id: number
          created_at?: string
          from_background?: boolean
          id?: never
          item_id?: string | null
          name?: string | null
          note?: string | null
          quantity?: number
        }
        Update: {
          broken?: boolean
          carried?: boolean
          character_id?: number
          created_at?: string
          from_background?: boolean
          id?: never
          item_id?: string | null
          name?: string | null
          note?: string | null
          quantity?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_items_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_items_item_id_fkey"
            columns: ["item_id"]
            isOneToOne: false
            referencedRelation: "items"
            referencedColumns: ["id"]
          },
        ]
      }
      character_languages: {
        Row: {
          character_id: number
          language_id: string
        }
        Insert: {
          character_id: number
          language_id: string
        }
        Update: {
          character_id?: number
          language_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_languages_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_languages_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
        ]
      }
      character_perks: {
        Row: {
          acquired_at: string
          character_id: number
          class_id: string | null
          id: number
          perk_id: string
        }
        Insert: {
          acquired_at?: string
          character_id: number
          class_id?: string | null
          id?: number
          perk_id: string
        }
        Update: {
          acquired_at?: string
          character_id?: number
          class_id?: string | null
          id?: number
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
            foreignKeyName: "character_perks_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
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
      character_traits: {
        Row: {
          character_id: number
          trait_id: number
        }
        Insert: {
          character_id: number
          trait_id: number
        }
        Update: {
          character_id?: number
          trait_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "character_traits_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_traits_trait_id_fkey"
            columns: ["trait_id"]
            isOneToOne: false
            referencedRelation: "traits"
            referencedColumns: ["id"]
          },
        ]
      }
      characters: {
        Row: {
          background_id: string | null
          backstory: string | null
          body: number
          charisma: number
          equipment_picks: Json
          id: number
          image_url: string | null
          level: number
          name: string
          owner: string
          personality: string | null
          race_id: string | null
          soul: number
          start_level: number
        }
        Insert: {
          background_id?: string | null
          backstory?: string | null
          body?: number
          charisma?: number
          equipment_picks?: Json
          id?: number
          image_url?: string | null
          level?: number
          name: string
          owner: string
          personality?: string | null
          race_id?: string | null
          soul?: number
          start_level?: number
        }
        Update: {
          background_id?: string | null
          backstory?: string | null
          body?: number
          charisma?: number
          equipment_picks?: Json
          id?: number
          image_url?: string | null
          level?: number
          name?: string
          owner?: string
          personality?: string | null
          race_id?: string | null
          soul?: number
          start_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "characters_background_id_fkey"
            columns: ["background_id"]
            isOneToOne: false
            referencedRelation: "backgrounds"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "characters_owner_fkey"
            columns: ["owner"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "characters_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      class_parents: {
        Row: {
          class_id: string
          parent_id: string
        }
        Insert: {
          class_id: string
          parent_id: string
        }
        Update: {
          class_id?: string
          parent_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "class_parents_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_parents_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      class_perks: {
        Row: {
          class_id: string
          is_core: boolean
          perk_id: string
          sort: number
        }
        Insert: {
          class_id: string
          is_core?: boolean
          perk_id: string
          sort?: number
        }
        Update: {
          class_id?: string
          is_core?: boolean
          perk_id?: string
          sort?: number
        }
        Relationships: [
          {
            foreignKeyName: "class_perks_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "class_perks_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      classes: {
        Row: {
          color: string | null
          description: string | null
          id: string
          image_url: string | null
          magic: Database["public"]["Enums"]["class_magic"]
          name: string
          rank: Database["public"]["Enums"]["class_rank"]
          sort: number
        }
        Insert: {
          color?: string | null
          description?: string | null
          id: string
          image_url?: string | null
          magic?: Database["public"]["Enums"]["class_magic"]
          name: string
          rank: Database["public"]["Enums"]["class_rank"]
          sort?: number
        }
        Update: {
          color?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          magic?: Database["public"]["Enums"]["class_magic"]
          name?: string
          rank?: Database["public"]["Enums"]["class_rank"]
          sort?: number
        }
        Relationships: []
      }
      items: {
        Row: {
          armour_rating: number | null
          category: string | null
          damage: string | null
          damage_type: string | null
          description: string | null
          id: string
          image_url: string | null
          kind: Database["public"]["Enums"]["item_kind"]
          name: string
          properties: string | null
          sort: number
        }
        Insert: {
          armour_rating?: number | null
          category?: string | null
          damage?: string | null
          damage_type?: string | null
          description?: string | null
          id: string
          image_url?: string | null
          kind?: Database["public"]["Enums"]["item_kind"]
          name: string
          properties?: string | null
          sort?: number
        }
        Update: {
          armour_rating?: number | null
          category?: string | null
          damage?: string | null
          damage_type?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          kind?: Database["public"]["Enums"]["item_kind"]
          name?: string
          properties?: string | null
          sort?: number
        }
        Relationships: []
      }
      language_relations: {
        Row: {
          language_id: string
          related_id: string
        }
        Insert: {
          language_id: string
          related_id: string
        }
        Update: {
          language_id?: string
          related_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "language_relations_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "language_relations_related_id_fkey"
            columns: ["related_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
        ]
      }
      languages: {
        Row: {
          description: string | null
          id: string
          name: string
          sort: number
        }
        Insert: {
          description?: string | null
          id: string
          name: string
          sort?: number
        }
        Update: {
          description?: string | null
          id?: string
          name?: string
          sort?: number
        }
        Relationships: []
      }
      perk_requirement_classes: {
        Row: {
          class_id: string
          requirement_id: number
        }
        Insert: {
          class_id: string
          requirement_id: number
        }
        Update: {
          class_id?: string
          requirement_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "perk_requirement_classes_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "perk_requirement_classes_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "perk_requirements"
            referencedColumns: ["id"]
          },
        ]
      }
      perk_requirements: {
        Row: {
          id: number
          kind: Database["public"]["Enums"]["requirement_kind"]
          level: number | null
          perk_id: string
          required_perk_id: string | null
        }
        Insert: {
          id?: number
          kind: Database["public"]["Enums"]["requirement_kind"]
          level?: number | null
          perk_id: string
          required_perk_id?: string | null
        }
        Update: {
          id?: number
          kind?: Database["public"]["Enums"]["requirement_kind"]
          level?: number | null
          perk_id?: string
          required_perk_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "perk_requirements_perk_id_fkey"
            columns: ["perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "perk_requirements_required_perk_id_fkey"
            columns: ["required_perk_id"]
            isOneToOne: false
            referencedRelation: "perks"
            referencedColumns: ["id"]
          },
        ]
      }
      perks: {
        Row: {
          area: string | null
          components:
            | Database["public"]["Enums"]["spell_component_type"][]
            | null
          cost_amount: number | null
          cost_resource: Database["public"]["Enums"]["cost_resource"] | null
          cost_unit: string | null
          damage: string | null
          damage_types: Database["public"]["Enums"]["damage_type"][] | null
          description: string | null
          duration: Database["public"]["Enums"]["spell_duration"] | null
          flavour: string | null
          id: string
          image_url: string | null
          kind: Database["public"]["Enums"]["perk_kind"]
          material_note: string | null
          name: string
          race_id: string | null
          range: string | null
        }
        Insert: {
          area?: string | null
          components?:
            | Database["public"]["Enums"]["spell_component_type"][]
            | null
          cost_amount?: number | null
          cost_resource?: Database["public"]["Enums"]["cost_resource"] | null
          cost_unit?: string | null
          damage?: string | null
          damage_types?: Database["public"]["Enums"]["damage_type"][] | null
          description?: string | null
          duration?: Database["public"]["Enums"]["spell_duration"] | null
          flavour?: string | null
          id: string
          image_url?: string | null
          kind?: Database["public"]["Enums"]["perk_kind"]
          material_note?: string | null
          name: string
          race_id?: string | null
          range?: string | null
        }
        Update: {
          area?: string | null
          components?:
            | Database["public"]["Enums"]["spell_component_type"][]
            | null
          cost_amount?: number | null
          cost_resource?: Database["public"]["Enums"]["cost_resource"] | null
          cost_unit?: string | null
          damage?: string | null
          damage_types?: Database["public"]["Enums"]["damage_type"][] | null
          description?: string | null
          duration?: Database["public"]["Enums"]["spell_duration"] | null
          flavour?: string | null
          id?: string
          image_url?: string | null
          kind?: Database["public"]["Enums"]["perk_kind"]
          material_note?: string | null
          name?: string
          race_id?: string | null
          range?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "perks_race_id_fkey"
            columns: ["race_id"]
            isOneToOne: false
            referencedRelation: "races"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          display_name: string | null
          id: string
          role: Database["public"]["Enums"]["user_role"] | null
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id: string
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          display_name?: string | null
          id?: string
          role?: Database["public"]["Enums"]["user_role"] | null
        }
        Relationships: []
      }
      races: {
        Row: {
          blurb: string | null
          description: string | null
          id: string
          image_url: string | null
          language_id: string | null
          name: string
          plural: string | null
          sort: number
        }
        Insert: {
          blurb?: string | null
          description?: string | null
          id: string
          image_url?: string | null
          language_id?: string | null
          name: string
          plural?: string | null
          sort?: number
        }
        Update: {
          blurb?: string | null
          description?: string | null
          id?: string
          image_url?: string | null
          language_id?: string | null
          name?: string
          plural?: string | null
          sort?: number
        }
        Relationships: [
          {
            foreignKeyName: "races_language_id_fkey"
            columns: ["language_id"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["id"]
          },
        ]
      }
      rulebook_chapters: {
        Row: {
          created_at: string
          id: string
          position: number
          title: string
        }
        Insert: {
          created_at?: string
          id?: string
          position?: number
          title: string
        }
        Update: {
          created_at?: string
          id?: string
          position?: number
          title?: string
        }
        Relationships: []
      }
      rulebook_pages: {
        Row: {
          chapter_id: string
          content: string
          id: string
          intro: string | null
          position: number
          slug: string
          title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          chapter_id: string
          content?: string
          id?: string
          intro?: string | null
          position?: number
          slug: string
          title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          chapter_id?: string
          content?: string
          id?: string
          intro?: string | null
          position?: number
          slug?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rulebook_pages_chapter_id_fkey"
            columns: ["chapter_id"]
            isOneToOne: false
            referencedRelation: "rulebook_chapters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rulebook_pages_updated_by_fkey"
            columns: ["updated_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      skills: {
        Row: {
          class_id: string
          description: string | null
          id: number
          is_unique: boolean
          name: string
          resource: Database["public"]["Enums"]["resource_pool"]
          sort: number
        }
        Insert: {
          class_id: string
          description?: string | null
          id?: number
          is_unique?: boolean
          name: string
          resource: Database["public"]["Enums"]["resource_pool"]
          sort?: number
        }
        Update: {
          class_id?: string
          description?: string | null
          id?: number
          is_unique?: boolean
          name?: string
          resource?: Database["public"]["Enums"]["resource_pool"]
          sort?: number
        }
        Relationships: [
          {
            foreignKeyName: "skills_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "classes"
            referencedColumns: ["id"]
          },
        ]
      }
      traits: {
        Row: {
          approved_by: string | null
          created_at: string
          created_by: string | null
          description: string | null
          downside: string
          flavour: string | null
          id: number
          image_url: string | null
          is_custom: boolean
          name: string
          upside: string
        }
        Insert: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          downside: string
          flavour?: string | null
          id?: number
          image_url?: string | null
          is_custom?: boolean
          name: string
          upside: string
        }
        Update: {
          approved_by?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          downside?: string
          flavour?: string | null
          id?: number
          image_url?: string | null
          is_custom?: boolean
          name?: string
          upside?: string
        }
        Relationships: [
          {
            foreignKeyName: "traits_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "traits_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
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
      is_campaign_member: { Args: { cid: number }; Returns: boolean }
      my_role: {
        Args: never
        Returns: Database["public"]["Enums"]["user_role"]
      }
      save_character_build: {
        Args: {
          p_background_id?: string
          p_backstory?: string
          p_body: number
          p_character_id?: number
          p_charisma: number
          p_classes: Json
          p_equipment_picks: Json
          p_items: Json
          p_languages: Json
          p_level: number
          p_name: string
          p_perks: Json
          p_race_id?: string
          p_soul: number
          p_start_level: number
          p_traits: Json
        }
        Returns: number
      }
    }
    Enums: {
      class_magic: "none" | "full" | "pseudo"
      class_rank: "basic" | "advanced" | "mighty"
      cost_resource: "body" | "soul" | "charisma" | "material" | "coin"
      damage_type:
        | "fire"
        | "ice"
        | "lightning"
        | "poison"
        | "psychic"
        | "necrotic"
        | "radiant"
        | "force"
        | "thunder"
        | "acid"
        | "piercing"
        | "slashing"
        | "bludgeoning"
      item_kind: "weapon" | "armour" | "shield" | "clothing" | "tool" | "gear"
      perk_kind: "perk" | "spell" | "racial" | "aspect"
      requirement_kind:
        | "class_level"
        | "class_levels_all"
        | "class_levels_sum"
        | "has_perk"
        | "has_aspect"
      resource_pool: "body" | "soul" | "charisma"
      spell_component_type: "verbal" | "somatic" | "material"
      spell_duration:
        | "instantaneous"
        | "short"
        | "long"
        | "concentration"
        | "combat"
        | "will"
      user_role: "player" | "dm" | "admin"
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
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
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
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
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
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
      class_magic: ["none", "full", "pseudo"],
      class_rank: ["basic", "advanced", "mighty"],
      cost_resource: ["body", "soul", "charisma", "material", "coin"],
      damage_type: [
        "fire",
        "ice",
        "lightning",
        "poison",
        "psychic",
        "necrotic",
        "radiant",
        "force",
        "thunder",
        "acid",
        "piercing",
        "slashing",
        "bludgeoning",
      ],
      item_kind: ["weapon", "armour", "shield", "clothing", "tool", "gear"],
      perk_kind: ["perk", "spell", "racial", "aspect"],
      requirement_kind: [
        "class_level",
        "class_levels_all",
        "class_levels_sum",
        "has_perk",
        "has_aspect",
      ],
      resource_pool: ["body", "soul", "charisma"],
      spell_component_type: ["verbal", "somatic", "material"],
      spell_duration: [
        "instantaneous",
        "short",
        "long",
        "concentration",
        "combat",
        "will",
      ],
      user_role: ["player", "dm", "admin"],
    },
  },
} as const
