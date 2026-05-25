import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://lxoawhlnbocxzxpglxoo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b2F3aGxuYm9jeHp4cGdseG9vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3ODU3NzgzOCwiZXhwIjoyMDk0MTUzODM4fQ.B1wc-x8igho5NnNXgaqj52PpSgN3mzIS3VGSARJtEtM"
)
// import { createClient } from '@supabase/supabase-js'
// export const supabase = createClient(
//     "https://lxoawhlnbocxzxpglxoo.supabase.co/rest/v1/",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b2F3aGxuYm9jeHp4cGdseG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1Nzc4MzgsImV4cCI6MjA5NDE1MzgzOH0.K-y1STKbWkqgKpLjpjzmVtpN809t1h6iPNffYwZdVTc"
// )