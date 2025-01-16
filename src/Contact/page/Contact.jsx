import { ContactFirstRowItemStyled, ContactFirstRowStyled, ContactItemActionStyled, ContactItemCommentStyled, ContactItemStyled, ContactItemTextStyled, ContactKPIContainer, ContactKPIIconItemStyled, ContactKPIIconsStyled, ContactKPIInfoStyled, ContactKPIProfileInfoStyled, ContactKPIProfilePhotoStyled, ContactKPIProfileRowStyled, ContactKPIStyled, ContactKPITextStyled, ContactKPITimeStyled, ContactListContainerStyled, ContactMenuItemStyled, ContactMenuStyled, ContactStyled } from "../components/ContactStyled"
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
            <ContactListContainerStyled>
                <ContactMenuStyled>
                    <ContactMenuItemStyled>All Contacts</ContactMenuItemStyled>
                    <ContactMenuItemStyled>Archived</ContactMenuItemStyled>
                </ContactMenuStyled>
                <ContactFirstRowStyled>
                    <ContactFirstRowItemStyled>Date</ContactFirstRowItemStyled>
                    <ContactFirstRowItemStyled>Customer</ContactFirstRowItemStyled>
                    <ContactFirstRowItemStyled>Comment</ContactFirstRowItemStyled>
                    <ContactFirstRowItemStyled>Action</ContactFirstRowItemStyled>
                </ContactFirstRowStyled>
                <ContactItemStyled>
                    <div>
                        <ContactItemTextStyled>#000123456</ContactItemTextStyled>
                        <ContactItemTextStyled><span>Nov 21th 2020 09:21 AM</span></ContactItemTextStyled>
                    </div>
                    <div>
                        <ContactItemTextStyled>Alberto Gil</ContactItemTextStyled>
                        <ContactItemTextStyled><span>alberto.gil.sanjuan@gmail.com</span></ContactItemTextStyled>
                        <ContactItemTextStyled><span>+34 645 630 341</span></ContactItemTextStyled>
                    </div>
                    <ContactItemCommentStyled>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</ContactItemCommentStyled>
                    <ContactItemActionStyled>Archive</ContactItemActionStyled>
                </ContactItemStyled>
                <ContactItemStyled>
                    <div>
                        <ContactItemTextStyled>#000123456</ContactItemTextStyled>
                        <ContactItemTextStyled><span>Nov 21th 2020 09:21 AM</span></ContactItemTextStyled>
                    </div>
                    <div>
                        <ContactItemTextStyled>Alberto Gil</ContactItemTextStyled>
                        <ContactItemTextStyled><span>alberto.gil.sanjuan@gmail.com</span></ContactItemTextStyled>
                        <ContactItemTextStyled><span>+34 645 630 341</span></ContactItemTextStyled>
                    </div>
                    <ContactItemCommentStyled>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</ContactItemCommentStyled>
                    <ContactItemActionStyled>Archive</ContactItemActionStyled>
                </ContactItemStyled>
                <ContactItemStyled>
                    <div>
                        <ContactItemTextStyled>#000123456</ContactItemTextStyled>
                        <ContactItemTextStyled><span>Nov 21th 2020 09:21 AM</span></ContactItemTextStyled>
                    </div>
                    <div>
                        <ContactItemTextStyled>Alberto Gil</ContactItemTextStyled>
                        <ContactItemTextStyled><span>alberto.gil.sanjuan@gmail.com</span></ContactItemTextStyled>
                        <ContactItemTextStyled><span>+34 645 630 341</span></ContactItemTextStyled>
                    </div>
                    <ContactItemCommentStyled>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</ContactItemCommentStyled>
                    <ContactItemActionStyled>Archive</ContactItemActionStyled>
                </ContactItemStyled>
                <ContactItemStyled>
                    <div>
                        <ContactItemTextStyled>#000123456</ContactItemTextStyled>
                        <ContactItemTextStyled><span>Nov 21th 2020 09:21 AM</span></ContactItemTextStyled>
                    </div>
                    <div>
                        <ContactItemTextStyled>Alberto Gil</ContactItemTextStyled>
                        <ContactItemTextStyled><span>alberto.gil.sanjuan@gmail.com</span></ContactItemTextStyled>
                        <ContactItemTextStyled><span>+34 645 630 341</span></ContactItemTextStyled>
                    </div>
                    <ContactItemCommentStyled>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</ContactItemCommentStyled>
                    <ContactItemActionStyled>Archive</ContactItemActionStyled>
                </ContactItemStyled>
                <ContactItemStyled>
                    <div>
                        <ContactItemTextStyled>#000123456</ContactItemTextStyled>
                        <ContactItemTextStyled><span>Nov 21th 2020 09:21 AM</span></ContactItemTextStyled>
                    </div>
                    <div>
                        <ContactItemTextStyled>Alberto Gil</ContactItemTextStyled>
                        <ContactItemTextStyled><span>alberto.gil.sanjuan@gmail.com</span></ContactItemTextStyled>
                        <ContactItemTextStyled><span>+34 645 630 341</span></ContactItemTextStyled>
                    </div>
                    <ContactItemCommentStyled>We recently had dinner with friends at Dimas Can Zheng and we all walked away with a great experience. Good food, pleasant environment, personal attention through all the evening. Thanks to the team and we will be back</ContactItemCommentStyled>
                    <ContactItemActionStyled>Archive</ContactItemActionStyled>
                </ContactItemStyled>
            </ContactListContainerStyled>
        </ContactStyled>
    )
}