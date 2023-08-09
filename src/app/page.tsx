'use client'
import { Photos } from "@/api/Photos"
import { ModalComponent } from "@/components/ModalComponent"
import { PhotoComponent } from "@/components/PhotoComponent"
import { useState } from "react"
const Page = () => {
  const [showModal, setShowModal] = useState(false)
  const [imgOfModal, setImgOfModal] = useState('')

  const openModal = (id: number) => {
    const photo = Photos.find(photo => photo.id === id)
    if (photo) {
      setImgOfModal(photo.img)
      setShowModal(true)
    }
  }
  const closeModal = () => {
    setShowModal(false)
  }
  return (

    <div
      className="flex justify-center items-center flex-col min-h-screen bg-black text-white"
    >
      <div className="bold text-4xl mb-7">Fotos Intergalácticas</div>
      <div
        className="container max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {Photos.map((photo, index) => (
          <PhotoComponent index={index} photo={photo} openModal={openModal} />
        ))}
      </div>
      {showModal &&
        <ModalComponent image={imgOfModal} closeModal={closeModal} />
      }
    </div>
  )
}

export default Page