import { z } from "zod"

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const announcementSchema = z.object({
  id: z.string(),	
  bien_so: z.string(),
  gia_dau_gia: z.string(),
  tinh: z.string(),
  loai_xe: z.string(),
  loai_bien: z.string(),
})

export type Announcement = z.infer<typeof announcementSchema>
