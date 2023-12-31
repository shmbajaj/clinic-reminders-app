import { useState } from 'react';
import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  HStack,
  Text,
  VStack,
  Icon,
} from '@chakra-ui/react';
import {
  FaEdit,
  FaTrash,
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAngleDoubleRight,
} from 'react-icons/fa';

interface Column {
  header: string;
  accessor: string;
}

interface RowData {
  [key: string]: string | number;
}

interface DataTableProps {
  columns: Column[];
  data: Array<Record<string, any>>;
  itemsPerPage: number;
  onDelete: (id: any) => void;
  onEdit: (id: any) => void;
}

const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  itemsPerPage,
  onEdit,
  onDelete,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <VStack spacing={4} w="100%">
      <Table variant="striped" colorScheme="gray">
        <Thead>
          <Tr>
            {columns.map((column) => (
              <Th key={column.accessor}>{column.header}</Th>
            ))}
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentData.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {columns.map((column) => (
                <Td key={column.accessor}>{row[column.accessor] || "--"}</Td>
              ))}
              <Td>
                <HStack spacing={2}>
                  {/* <IconButton
                    icon={<FaEye />}
                    variant="ghost"
                    colorScheme="teal"
                    aria-label="View"
                  /> */}
                  <IconButton
                    icon={<FaEdit />}
                    variant="ghost"
                    colorScheme="blue"
                    aria-label="Edit"
                    onClick={() => onEdit?.(row.id)}
                  />
                  <IconButton
                    icon={<FaTrash />}
                    variant="ghost"
                    colorScheme="red"
                    aria-label="Delete"
                    onClick={() => onDelete?.(row.id)}
                  />
                </HStack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <HStack>
        <Button
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(1)}
          leftIcon={<Icon as={FaAngleDoubleLeft} />}
        >
          First
        </Button>
        <Button
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          leftIcon={<Icon as={FaAngleLeft} />}
        >
          Previous
        </Button>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          isDisabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
          rightIcon={<Icon as={FaAngleRight} />}
        >
          Next
        </Button>
        <Button
          isDisabled={currentPage === totalPages}
          onClick={() => handlePageChange(totalPages)}
          rightIcon={<Icon as={FaAngleDoubleRight} />}
        >
          Last
        </Button>
      </HStack>

      <VStack>
        <Text>
          Page {currentPage} of {totalPages}
        </Text>
        <Text>
          Row {startIndex + 1} - {startIndex + currentData.length} of{' '}
          {data.length}
        </Text>
      </VStack>
    </VStack>
  );
};

export default DataTable;
