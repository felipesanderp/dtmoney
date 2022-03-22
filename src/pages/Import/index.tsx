import { useState } from 'react';
import filesize from 'filesize';
import { useNavigate } from 'react-router-dom';

import { Upload } from '../../components/Upload';
import { FileList } from '../../components/FileList';
import { api } from '../../services/api';

import alert from '../../assets/alert.svg';

import { Container, Title, ImportFileContainer, Footer } from './styles';
import { Header } from '../../components/Header';
interface FileProps {
  file: File;
  name: string;
  readableSize: string;
}

export function Import() {
  const history =useNavigate();

  const [uploadedFiles, setUploadedFiles] = useState<FileProps[]>([]);

  async function handleUpload(): Promise<void> {
    const data = new FormData();

    if (!uploadedFiles.length) return;

    const file = uploadedFiles[0];

    data.append('file', file.file, file.name);

    try {
      await api.post('/transactions/import', data);

      history('/');

    } catch (err: any) {
      console.log(err.response.error);
    }
  }

  function submitFile(files: File[]): void {
    const uploadFiles = files.map(file => ({
      file,
      name: file.name,
      readableSize: filesize(file.size),
    }));

    setUploadedFiles(uploadFiles);

  }
  return (
    <>
      <Header />

      <Container>
        <Title>Importar uma transação</Title>
        <ImportFileContainer>
          <Upload onUpload={submitFile} />
           {!!uploadedFiles.length && <FileList files={uploadedFiles} />}

          <Footer>
            <p>
              <img src={alert} alt="Alert" />
              Permitido apenas arquivos CSV
            </p>
            <button onClick={handleUpload} type="button">
              Enviar
            </button>
          </Footer>
        </ImportFileContainer>
      </Container>
    </>
   
  )
}