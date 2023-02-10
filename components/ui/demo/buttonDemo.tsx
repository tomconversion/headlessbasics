import React from 'react';
import { Button, buttonVariants } from '../button';

const buttonDemo = () => (
  <>
    <div className='w-full break-after-auto py-4'>
      <div className='w-full break-after-auto py-4 columns-12'>
        <div className='w-full px-4'><Button variant={'destructive'}>destructive</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'accent'}>destructive accent</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'error'}>destructive error</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'primary'}>destructive primary</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'secondary'}  size={'lg'}>destructive secondary</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'success'}>destructive success</Button></div>
        <div className='w-full px-4'><Button variant={'destructive'} color={'warning'} size={'lg'}>destructive warning</Button></div>
      </div>
      
      <div className='w-full break-after-auto py-4 columns-12'>
        <div className='w-full px-4'><Button variant={'default'}>default</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'accent'}>default accent</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'error'}>default error</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'primary'}>default primary</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'secondary'}>default secondary</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'success'}>default success</Button></div>
        <div className='w-full px-4'><Button variant={'default'} color={'warning'}>default warning</Button></div>
      </div>

      
      <div className='w-full break-after-auto py-4'><Button variant={'ghost'}>ghost</Button></div>
      
      <div className='w-full break-after-auto py-4'><Button variant={'link'}>link</Button></div>
      
      <div className='w-full break-after-auto py-4'><Button variant={'outline'}>outline</Button></div>
      
      <div className='w-full break-after-auto py-4 columns-12'>
        <div className='w-full px-4'><Button variant={'subtle'}>subtle</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'accent'}>subtle accent</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'error'}>subtle error</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'primary'}>subtle primary</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'secondary'}>subtle secondary</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'success'}>subtle success</Button></div>
        <div className='w-full px-4'><Button variant={'subtle'} color={'warning'}>subtle warning</Button></div>
      </div>

    </div>
  </>
);
  
  export default buttonDemo;