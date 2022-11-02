export interface CurrentTask {
  id: string;
  title: string;
  imgSrc: string;
  status: 'created' | 'approve' | 'success'  | 'error';
  new: boolean;
  startDate: Date;
  endDate: Date;
}
