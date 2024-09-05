import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { GridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className="w-full py-20">
            {GridItems.map(({id, title, description, className, img, imgClassName, titleClassName, spareImg}) => (
                <BentoGridItem
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid