import { Photo } from "@/types/Photo"

type Props = {
    photo: Photo
    openModal: (id: number) => void
    index: number
}


export const PhotoComponent = ({index, photo, openModal}:Props) => {
    return (
        <div
            key={index}
            onClick={() => openModal(photo.id)}
            className="m-auto"
        >
            <img
                className="w-56 h-40 cursor-pointer"
                src={photo.img}
                alt={photo.name}
            />
        </div>
    )
}