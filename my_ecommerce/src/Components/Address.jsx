import React from "react";
import {useEditableControls,IconButton,ButtonGroup,Flex,Editable,EditablePreview,
        Input,EditableInput, Heading} from '@chakra-ui/react'
import {CheckIcon,CloseIcon,EditIcon,} from '@chakra-ui/icons'

const Address = () => {
    function EditableControls() {
        const {
          isEditing,
          getSubmitButtonProps,
          getCancelButtonProps,
          getEditButtonProps,
        } = useEditableControls()
    
        return isEditing ? (
          <ButtonGroup justifyContent='center' size='sm'>
            <IconButton icon={<CheckIcon />} {...getSubmitButtonProps()} />
            <IconButton icon={<CloseIcon />} {...getCancelButtonProps()} />
          </ButtonGroup>
        ) : (
          <Flex justifyContent='center'>
            <IconButton size='sm' icon={<EditIcon />} {...getEditButtonProps()} />
          </Flex>
        )
      }
    
      return (<>
      <Heading size={'md'} mt={'2%'} >Address :-</Heading>
        <Editable
          textAlign='center'
          defaultValue='4 Tennessee Street, South Fulton, Karickohoff Hollow, United States, 38253'
          fontSize='2xl'
          isPreviewFocusable={false}
        >
          <EditablePreview />
          {/* Here is the custom input */}
          <Input as={EditableInput} />
          <EditableControls />
        </Editable>
        </>
      )
}
export default Address;