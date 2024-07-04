'use client'

import { UserType } from "@/components/types"
import { create } from "zustand"

interface useAuthUserProps {
    authUserGlobal: UserType | null;
    setAuthUserGlobal: (p: UserType | null) => void
}
export const useAuthUser = create<useAuthUserProps>()((set) => ({
    authUserGlobal: null,
    setAuthUserGlobal: (p) => set({authUserGlobal: p})
}))