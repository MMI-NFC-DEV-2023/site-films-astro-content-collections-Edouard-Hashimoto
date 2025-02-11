import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const personne = defineCollection({
  loader: glob({ base: "src/data/personne", pattern: "**/*.md" }),
  schema: z.object({
    nom: z.string(),
    lieuNaissance: z.string(),
    dateNaissance: z.date(),
    dateDeces: z.date().optional(),
    nationalite: z.string(),
    profession: z
      .array(z.enum(["acteur", "realisateur", "scenariste", "producteur"]))
      .optional(),
  }),
});

const films = defineCollection({
  loader: glob({ base: "src/data/films", pattern: "**/*.md" }),
  schema: z.object({
    titre: z.string(),
    dateSortie: z.date(),
    realisateur: reference("personne").optional(),
    scenaristes: z.array(reference("personne")).optional(),
    roles: z.array(
      z.object({
        acteur: reference("personne"),
        role: z.string()
      })
    ).optional()
  }),
});

export const collections = { personne, films };
