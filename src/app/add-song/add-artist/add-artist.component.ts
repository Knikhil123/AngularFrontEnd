import { Component, OnInit,Inject } from '@angular/core';
import {FormControl,FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddartistService } from './addartist.service';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.component.html',
  styleUrls: ['./add-artist.component.css']
})
export class AddArtistComponent implements OnInit {
  [x: string]: any;
  form:FormGroup;
  submitted:boolean=false;

  ngOnInit() {
    this.form=new FormGroup(
      {
        artistname:new FormControl("",[Validators.required]),
        dateofbirth:new FormControl("",[Validators.required]),
        bio:new FormControl("",[Validators.required]),
      });
  }
OnSubmit(){
  console.log(this.form.value)
  const formData= this.form.value;
  console.log(formData)
  this.postAllName(formData);
}
public hasError = (controlName: string, errorName: string) =>{
  return this.form.controls[controlName].hasError(errorName);
}
constructor(public dialogRef: MatDialogRef<AddArtistComponent>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  postAllName(formData: any){

    return this.addartistService.postName(formData).subscribe(
      result=>{
        alert("SUCCESS")
      },
      error=>{
        alert("error")
    console.log(error)
      }
    )};

}
