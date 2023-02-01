import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from '../alert-dialog';

const AlertDialogDemo = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <button className="Button violet">Delete account</button>
    </AlertDialogTrigger>
    
      <AlertDialogContent className="AlertDialogContent">
        <AlertDialogTitle className="AlertDialogTitle">Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription className="AlertDialogDescription">
          This action cannot be undone. This will permanently delete your account and remove your
          data from our servers.
        </AlertDialogDescription>
        <div style={{ display: 'flex', gap: 25, justifyContent: 'flex-end' }}>
          <AlertDialogCancel asChild>
            <button className="Button mauve">Cancel</button>
          </AlertDialogCancel>
          <AlertDialogAction asChild>
            <button className="Button red">Yes, delete account</button>
          </AlertDialogAction>
        </div>
      </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDemo;