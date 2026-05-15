import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
    "https://lxoawhlnbocxzxpglxoo.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4b2F3aGxuYm9jeHp4cGdseG9vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1Nzc4MzgsImV4cCI6MjA5NDE1MzgzOH0.K-y1STKbWkqgKpLjpjzmVtpN809t1h6iPNffYwZdVTc"
)