import React from 'react';
import { Button } from '../button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '../dialog';
import * as DialogPrimitive from "@radix-ui/react-dialog"

const DialogDemo = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant='default' color='primary'>Edit Profile</Button>
    </DialogTrigger>
      <DialogContent className="DialogContent">
        <DialogTitle className="DialogTitle">Edit profile</DialogTitle>
        <DialogDescription className="DialogDescription">
          Make changes to your profile here. Click save when you&apos;re done.
        </DialogDescription>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="name">
            Name
          </label>
          <input className="Input" id="name" defaultValue="Pedro Duarte" />
        </fieldset>
        <fieldset className="Fieldset">
          <label className="Label" htmlFor="username">
            Username
          </label>
          <input className="Input" id="username" defaultValue="@peduarte" />
        </fieldset>
        <div style={{ display: 'flex', marginTop: 25, justifyContent: 'flex-end' }}>
            <DialogPrimitive.Close asChild>
                <Button variant='default' color='primary'>Save Changes</Button>
            </DialogPrimitive.Close>
        </div>
      </DialogContent>
  </Dialog>
);

export default DialogDemo;