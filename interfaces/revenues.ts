export type RevenueType = {
  id: number,
  name: string
  value: number,
  status: boolean,
  inInstallments: boolean,
  installmentsCount: number,
  installmentsStepType: "Diariamente" | "Semanalmente" | "Mensalmente" | "Anualmente",
  dateOfExpire: string[]
}