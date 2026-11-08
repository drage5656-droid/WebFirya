import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import LangDetail from './LangDetail.jsx'
import langs from './langs.js'

export default function LangDetailWrapper({ locale = 'ru' }) {
  const { id } = useParams()
  const lang = langs.find((item) => item.id === id)

  if (!lang) return <Navigate to="/#languages" replace />

  return <LangDetail lang={lang} locale={locale} />
}
