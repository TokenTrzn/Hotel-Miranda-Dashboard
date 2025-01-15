import { ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled, ContactStyled } from "../components/ContactStyled"
import ReviewPhoto from '../../assets/dni_cuadrado.jpg'
import OkIcon from '../../assets/ok_icon.png'
import DeleteIcon from '../../assets/delete_icon.png'

export const Contact = () => {

    return (
        <ContactStyled>
            <ContactKPIContainer>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
                <ContactKPIStyled>
                    <ContactKPIInfoStyled>
                        <ContactKPITextStyled>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</ContactKPITextStyled>
                    </ContactKPIInfoStyled>
                    <ContactKPIProfileRowStyled>
                        <ContactKPIProfilePhotoStyled src={ReviewPhoto} />
                        <ContactKPIProfileInfoStyled>
                            <ContactKPITextStyled>Alberto Gil</ContactKPITextStyled>
                            <ContactKPITimeStyled>4m ago</ContactKPITimeStyled>
                        </ContactKPIProfileInfoStyled>
                        <ContactKPIIconsStyled>
                            <ContactKPIIconItemStyled src={OkIcon} />
                            <ContactKPIIconItemStyled src={DeleteIcon} />
                        </ContactKPIIconsStyled>
                    </ContactKPIProfileRowStyled>
                </ContactKPIStyled>
            </ContactKPIContainer>
        </ContactStyled>
    )
}